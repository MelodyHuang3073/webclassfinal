"use client";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  OrderByDirection,
  where,
} from "firebase/firestore";
import app from "@/app/_firebase/Config";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { fail, successs } from "../_component/Table/ActionBtn/animateAction";
import { useAppSelector } from "../../redux/hooks";
import { UserState } from "../../redux/features/authSlice";
import { Office } from "../_settings/interface";
interface SelectState {
  [key: string]: string;
}
export default function useAdmin() {
  const db = getFirestore(app);
  const UserRef = collection(db, "users");
  const [userList, setUserlist] = useState<UserState[]>([]);
  const [userListFilter, setUserlistFilter] = useState<UserState[]>([]);
  const [updated, setUpdated] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState<SelectState>({
    順序: "desc",
  });
  const pathname = usePathname().substring(1);
  const user = useAppSelector((state) => state.auth);
  const [officeList, setOfficelist] = useState<Office[]>([]);
  const officeRef = collection(db, "office");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const q = query(
          UserRef,
          orderBy("applyTime", select.順序 as OrderByDirection)
        );
        const data = await getDocs(q);
        const list = data.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserlist(list);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [db, updated, select.順序]);

  useEffect(() => {
    setUserlistFilter(
      userList.filter(
        (user) =>
          user.email.toLowerCase().includes(search.toLowerCase()) ||
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.officeId.toLowerCase().includes(search.toLowerCase()) ||
          user.status.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [userList, search]);

  useEffect(() => {
    const fetchQffice = async () => {
      try {
        const data = await getDocs(officeRef);
        const list = data.docs.map((doc: any) => ({
          id: doc.id,
          value: doc.id,
          ...doc.data(),
        }));
        setOfficelist(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQffice();
  }, [db]);

  const checkOffice = async (uid: string, status: string) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "users", uid), {
        status,
      });
      successs("修改成功");
      setUpdated((currentValue) => currentValue + 1);
    } catch (error) {
      console.error(error);
      fail("發生錯誤");
      setLoading(false);
    }
  };

  const deleteUser = async (uid: string) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "users", uid));
      successs("刪除成功");
      setUpdated((currentValue) => currentValue + 1);
    } catch (error) {
      console.error(error);
      fail("發生錯誤");
      setLoading(false);
    }
  };
  const updateUser = async (uid: string, data: any) => {
    setLoading(true);
    console.log(data, "data");
    try {
      await updateDoc(doc(db, "users", uid), data);
      successs("修改成功");
      setUpdated((currentValue) => currentValue + 1);
    } catch (error) {
      console.error(error);
      fail("發生錯誤");
      setLoading(false);
    }
  };
  return [
    userListFilter,
    checkOffice,
    deleteUser,
    loading,
    search,
    setSearch,
    select,
    setSelect,
    officeList,
    updateUser,
  ] as const;
}
