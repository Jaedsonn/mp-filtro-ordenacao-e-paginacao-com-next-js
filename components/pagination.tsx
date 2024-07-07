"use client";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Pagination() {
  const serchParams = useSearchParams();

  const page = serchParams.get("page") ?? 1;
  const status = serchParams.get("status");
  const statusCondition = status !== null ? `status=${status}` : "";
  const search = serchParams.get("search");
  const searchCondition = search !== null ? `search=${search}` : "";
  const router = useRouter();

  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem
          onClick={() =>
            router.push(
              `/?page=${
                page !== "0" ? Number(page) - 1 : 1
              }&${statusCondition}&${searchCondition}`
            )
          }
        >
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink isActive={page === "1"} href={`/?page=1&${statusCondition}&${searchCondition}`}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink href={`/?page=2&${statusCondition}&${searchCondition}`} isActive={page === "2"}>
            {" "}
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink href={`/?page=3&${statusCondition}&${searchCondition}`} isActive={page === "3"}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink href={`/?page=8&${statusCondition}&${searchCondition}`} isActive={page === "8"}>
            8
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink href={`/?page=9&${statusCondition}&${searchCondition}`} isActive={page === "9"}>
            9
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink href={`/?page=10&${statusCondition}&${searchCondition}`}isActive={page === "10"}>
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => router.push(`/?page=${Number(page) + 1}&${statusCondition}&${searchCondition}`)}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
}
