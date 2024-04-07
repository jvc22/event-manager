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
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

import { ChangeEvent, useEffect, useState } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Attendee {
  id: number
  name: string
  email: string
  createdAt: string
  checkedInAt?: string
}

export function AttendeesList() {
  const [search, setSearch] = useState('')
  // const [page, setPage] = useState(1)

  const page = 1

  const [total, setTotal] = useState(0)
  const [attendees, setAttendees] = useState<Attendee[]>([])

  useEffect(() => {
    const url = new URL(
      'http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees',
    )
    url.searchParams.set('pageIndex', String(page - 1))

    if (search.length > 0) {
      url.searchParams.set('query', search)
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAttendees(data.attendees)
        setTotal(data.total)
      })
  }, [search, page])

  const totalPages = Math.ceil(total / 10)

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())

    url.searchParams.set('page', String(page))

    window.history.pushState({}, '', url)
  }

  function onSearchInputChange(ev: ChangeEvent<HTMLInputElement>) {
    setCurrentPage(1)
    setSearch(ev.target.value)
  }

  function goToFirstPage() {
    setCurrentPage(1)
  }

  function goToPreviousPage() {
    setCurrentPage(page - 1)
  }

  function goToNextPage() {
    setCurrentPage(page + 1)
  }

  function goToLastPage() {
    setCurrentPage(totalPages)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 flex items-center gap-3 px-3 py-1.5 border rounded-lg border-white/10">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChange}
            className="p-0 border-0 bg-transparent flex-1 outline-none text-sm focus:ring-0"
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
          {attendees.map((attendee) => (
            <TableRow
              key={attendee.id}
              className="border-b border-white/10 hover:bg-white/5"
            >
              <TableCell>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border-white/10"
                />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
              <TableCell>
                {attendee.checkedInAt === null ? (
                  <span className="text-zinc-400">Não fez check-in</span>
                ) : (
                  dayjs().to(attendee.checkedInAt)
                )}
              </TableCell>
              <TableCell>
                <IconButton isTransparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando {attendees.length} de {total} item(s)
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>
                  Página {page} de {totalPages}
                </span>

                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
