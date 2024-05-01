import express from 'express';

const allstudents = (req, res) => res.send("all students");
const newstudents = (req, res) => res.send("new students");
const updatestudents = (req, res) => res.send("update students");
const deletestudents = (req, res) => res.send("delete students");

export {allstudents, newstudents, updatestudents, deletestudents}