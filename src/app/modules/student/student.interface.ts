import { Schema, model, connect } from "mongoose";

export type User = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: "male" | "female";
  email: string;
  dateOfBirth: string;
  phone: string;
  emergencyContact: string;
  bloodGrp?: "A+" | "B+" | "AB+";
  presentAddress: string;
  permanentAddress: string;
  avatar?: string;
};
