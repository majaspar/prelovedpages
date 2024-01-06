import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../Admin.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Success from "../../components/Success";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchBookModelData } from "../../api/fetchData";
import axios from "axios";
import UpdateBookModelForm from "./UpdateBookModelForm";

export default function UpdateBookModel() {
    return <div>
      <UpdateBookModelForm/>
      </div>
 
}