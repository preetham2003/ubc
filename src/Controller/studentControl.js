//const express = require('express')
//const mongoose = require('mongoose')
const studentModel = require('../Models/studentModel');
const { validEmail,validPass } = require('../validation/Valid');


const createStudent = async function(req,res){
    try{
    let student = req.body;
    let {fname, lname, email,password,address}=student;

    if(!validEmail) return res.send({message : "Please enter the valid email"})
    if(!validPass) return res.send({message : "please enter valid password"})

    if(!fname|| !lname ||!email ||!password ||!address){
        return res.send({message:"please provide all information!"})
    }

    let createStu = await studentModel.create(student)
    res.send({message : createStu})

}

catch (err){
    console.log("server error",err)
}
}

module.exports.createStudent=createStudent