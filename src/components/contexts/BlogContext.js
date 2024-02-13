import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toastNotify } from "../helper/Toastify";
import { auth, db } from '../firebase';
import {setDoc,doc} from 'firebase/firestore'

export const BlogContext = createContext();