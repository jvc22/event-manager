import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 flex items-center gap-3 px-3 py-1.5 border rounded-lg border-white/10">
          <Search className="size-4 text-emerald-300" />
          <input
            className="p-0 border-0 bg-transparent flex-1 outline-none text-sm"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border-white/10"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, index) => (
            <tr
              key={index}
              className="border-b border-white/10 hover:bg-white/5"
            >
              <td className="py-3 px-4 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border-white/10"
                />
              </td>
              <td className="py-3 px-4 text-sm text-zinc-300">163310</td>
              <td className="py-3 px-4 text-sm text-zinc-300">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    João Victor Costa
                  </span>
                  <span>joaovictor@email.com</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
              <td className="py-3 px-4 text-sm text-zinc-300">3 dias atrás</td>
              <td className="py-3 px-4 text-sm text-zinc-300">
                <IconButton isTransparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              className="py-3 px-4 text-sm font-semibold text-left"
              colSpan={3}
            >
              Mostrando 10 de 228 item(s)
            </td>
            <td
              className="py-3 px-4 text-sm font-semibold text-right"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
