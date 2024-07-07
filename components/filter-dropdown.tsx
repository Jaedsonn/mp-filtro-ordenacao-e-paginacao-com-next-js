"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function FilterDropdown() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size={"default"}
          className="flex gap-2 text-slate-600"
        >
          <Filter className="h-4 w-4" />
          Status
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-16">
        <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="">
          <DropdownMenuRadioItem value="" onClick={() => router.push(`/?page=${page}`)}>Todos</DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="pending"
            onClick={() => router.push(`/?page=${page}&status=pending`)}
          >
            Pendente
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="completed"
            onClick={() => router.push(`/?page=${page}&status=completed`)}
          >
            Completo
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
