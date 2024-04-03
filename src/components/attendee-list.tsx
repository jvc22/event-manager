import { Search } from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="w-72 flex items-center gap-3 px-3 py-1.5 border rounded-lg border-white/10 text-sm">
        <Search className="size-4 text-emerald-300" />
        <input
          className="bg-transparent flex-1 outline-none"
          placeholder="Buscar participante..."
        />
      </div>
    </div>
  )
}

// 1:00:19
