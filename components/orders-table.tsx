"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { ChevronsUpDown, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { people, peopleData } from "@/types/people";
import { useSearchParams } from "next/navigation";
import { stat } from "fs";

export default function OrdersTable() {
  const [data, setData] = useState<peopleData>();

  const serchParams = useSearchParams();
  const page = serchParams.get("page");
  const pageCondition = page !== null || NaN ? `page=${page}` : "";
  const status = serchParams.get("status");
  const statusCondition = status !== null ? `status=${status}` : "";
  const search = serchParams.get("search");
  const searchCondition = search !== null ? `search=${search}` : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://apis.codante.io/api/orders-api/orders?${pageCondition}&${statusCondition}&${searchCondition}`
        );

        if (!response.ok) {
          throw "Resposta não veio";
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page, status, statusCondition, search, searchCondition]);

  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full">
          <TableHead className="table-cell">Cliente</TableHead>
          <TableHead className="table-cell">Status</TableHead>
          <TableHead className="table-cell cursor-pointer justify-end items-center gap-1">
            <div className="flex items-center gap-1">
              Data
              <ChevronsUpDown className="w-4" />
            </div>
          </TableHead>
          <TableHead className="text-right cursor-pointer flex justify-end items-center gap-1">
            Valor
            <ChevronsUpDown className="w-4" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data.map((item: people) => (
          <TableRow key={item?.id}>
            <TableCell>
              <div className="font-medium">{item?.customer_name}</div>
              <div className="hidden md:inline text-sm text-muted-foreground">
                {item?.customer_email}
              </div>
            </TableCell>
            <TableCell>
              <Badge className={`text-xs`} variant="outline">
                {item?.status}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {item?.order_date}
            </TableCell>
            <TableCell className="text-right">
              {item?.amount_in_cents}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
