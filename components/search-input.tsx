"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const serchParams = useSearchParams();
  const page = serchParams.get("page") ?? 1;
  const pageCondition = page !== null || NaN ? `page=${1}` : "";
  const status = serchParams.get("status");
  const statusCondition = status !== null ? `&status=${status}` : "";

  const handlePath = (e: any) => {
    if (e.trim() === "") {
      router.push(`/?${pageCondition}&${statusCondition}`);
    } else {
      router.push(`/?${pageCondition}${statusCondition}&search=${e}`);
    }
  };

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Busque por nome..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        onChange={(e) => handlePath(e.target.value)}
      />
    </div>
  );
}
