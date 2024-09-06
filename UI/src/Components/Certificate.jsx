import { BrowserProvider, Contract } from 'ethers';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CertModuleCert } from "../scdata/deployed_addresses.json"
import { abi } from "../scdata/Cert.json"

const Certificate = () => {
  const [student, setStudent] = useState({});
  const { id } = useParams();
  const provider= new BrowserProvider(window.ethereum)

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        // const res = await fetch(`http://localhost:3004/api/form/${id}`);
        // const data = await res.json();
        // console.log(data);
        // setStudent(data);


        const signer=await provider.getSigner();
        const instance = new Contract(CertModuleCert, abi, provider)
      
        const result = await instance.Certificates(id)
        setStudent(result);


      } catch (error) {
        console.log("Error:", error);
      }

    };

    fetchStudentDetails();
  }, [id]); // Ensure useEffect runs when `id` changes
console.log(student)
  return (
    <>
      <div className="w-2/4 h-[400px] shadow-lg mx-auto  bg-white">
        <h1 className="text-2xl text-center ml-32 mt-32">Kerala Blockchain Academy</h1><br/>
        <img src="/src/Image/Screenshot.png" alt="Certificate" className="mx-auto flex-none w-56" /><br/>
        <p className="text-center">This is to certify that {student.name} has successfully completed {student.course}</p>
        <p className="text-center">with {student.grade} on {student.date}</p>
      </div>
    </>
  );
};

export default Certificate;
