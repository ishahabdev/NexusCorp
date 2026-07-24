"use client"

import { useState, useMemo } from "react"
import { Filter, Download, ChevronLeft, ChevronRight } from "lucide-react"

type LogEntry = {
  timestamp: string
  eventType: string
  objectId: string
  status: "SUCCESS" | "WARNING" | "DENIED"
}

const allLogs: LogEntry[] = [
  { timestamp: "2024-05-12 14:22:01", eventType: "API_KEY_ROTATION", objectId: "sec_9j2f8...93k", status: "SUCCESS" },
  { timestamp: "2024-05-12 11:05:44", eventType: "DEPLOY_TRIGGER", objectId: "dep_721v9...41a", status: "SUCCESS" },
  { timestamp: "2024-05-11 23:59:12", eventType: "DB_BACKUP_INIT", objectId: "bak_003x1...55q", status: "WARNING" },
  { timestamp: "2024-05-11 18:30:10", eventType: "SSH_LOGIN_FAILURE", objectId: "srv_94a21...22p", status: "DENIED" },
  { timestamp: "2024-05-11 15:12:33", eventType: "API_KEY_ROTATION", objectId: "sec_1k3f2...77m", status: "SUCCESS" },
  { timestamp: "2024-05-10 09:41:20", eventType: "DEPLOY_TRIGGER", objectId: "dep_552z1...19b", status: "WARNING" },
  { timestamp: "2024-05-10 02:15:08", eventType: "SSH_LOGIN_FAILURE", objectId: "srv_33a90...44c", status: "DENIED" },
  { timestamp: "2024-05-09 20:05:55", eventType: "DB_BACKUP_INIT", objectId: "bak_881y2...12d", status: "SUCCESS" },
]

const statusStyles: Record<LogEntry["status"], string> = {
  SUCCESS: "bg-green-100 text-green-700",
  WARNING: "bg-amber-100 text-amber-700",
  DENIED: "bg-red-100 text-red-700",
}

const pageSize = 4

export default function ActivityLogsTable() {
  const [page, setPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState<"ALL" | LogEntry["status"]>("ALL")
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const filteredLogs = useMemo(() => {
    if (statusFilter === "ALL") return allLogs
    return allLogs.filter((log) => log.status === statusFilter)
  }, [statusFilter])
  const totalPages = Math.ceil(filteredLogs.length / pageSize)
  const paginatedLogs = useMemo(() => {
    const start = (page - 1) * pageSize
    return filteredLogs.slice(start, start + pageSize)
  }, [filteredLogs, page])
  const handleFilterSelect = (status: "ALL" | LogEntry["status"]) => {
    setStatusFilter(status)
    setPage(1)
    setShowFilterMenu(false)
  }
  const handleExport = () => {
    const headers = ["Timestamp", "Event Type", "Object ID", "Status"]
    const rows = filteredLogs.map((log) => [log.timestamp, log.eventType, log.objectId, log.status])
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n")
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "activity-logs.csv"
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white border-2 border-gray-200  rounded-xl overflow-hidden ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 py-4 border-b relative">
        <h3 className="font-semibold text-2xl">Recent Activity Logs</h3>
        <div className="flex gap-2">
          <div className="relative">
            <button
              onClick={() => setShowFilterMenu((prev) => !prev)}
              className="flex items-center gap-1 text-xs px-3 py-1.5 border rounded-md hover:bg-gray-50 whitespace-nowrap"
            >
              <Filter className="h-3.5 w-3.5" />
              {statusFilter === "ALL" ? "Filter" : statusFilter}
            </button>

            {showFilterMenu && (
              <div className="absolute left-0 sm:left-auto sm:right-0 mt-1 w-36 bg-white border rounded-md shadow-md z-10 text-xs">
                {(["ALL", "SUCCESS", "WARNING", "DENIED"] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => handleFilterSelect(status)}
                    className={`w-full text-left px-3 py-2 hover:bg-gray-50 ${
                      statusFilter === status ? "font-medium text-blue-600" : ""
                    }`}
                  >
                    {status === "ALL" ? "All statuses" : status}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleExport}
            className="flex items-center gap-1 text-xs px-3 py-1.5 border rounded-md hover:bg-gray-50 whitespace-nowrap"
          >
            <Download className="h-3.5 w-3.5" /> Export CSV
          </button>
        </div>
      </div>

      {/* Table - horizontal scroll on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b text-left">
              <th className="py-3 px-4 font-medium text-xs text-gray-800">Timestamp</th>
              <th className="py-3 px-4 font-medium text-xs text-gray-800">Event type</th>
              <th className="py-3 px-4 font-medium text-xs text-gray-800">Object ID</th>
              <th className="py-3 px-4 font-medium text-xs text-gray-800">Status</th>
              <th className="py-3 px-4 font-medium text-xs text-gray-800 text-right">Details</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLogs.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-6 text-center text-gray-400 text-sm">
                  No logs match this filter.
                </td>
              </tr>
            ) : (
              paginatedLogs.map((log, index) => (
                <tr key={index} className="border-b-2 last:border-0 hover:bg-gray-50">
                  <td className="py-5 px-4 text-gray-800 whitespace-nowrap">{log.timestamp}</td>
                  <td className="py-5 px-4 whitespace-nowrap">{log.eventType}</td>
                  <td className="py-5 px-4 font-mono text-gray-800 whitespace-nowrap">{log.objectId}</td>
                  <td className="py-5 px-4">
                    <span className={`text-xs px-2 py-0.5 rounded-md font-medium whitespace-nowrap ${statusStyles[log.status]}`}>
                      {log.status.charAt(0) + log.status.slice(1).toLowerCase()}
                    </span>
                  </td>
                 
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 bg-gray-100 sm:px-5 py-3 border-t text-xs text-gray-800">
        <span className="order-2 sm:order-1">
          Showing {filteredLogs.length === 0 ? 0 : (page - 1) * pageSize + 1}-
          {Math.min(page * pageSize, filteredLogs.length)} of {filteredLogs.length} entries
        </span>
        <div className="flex items-center gap-1 order-1 sm:order-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-1.5 rounded-md border hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-2.5 py-1 rounded-md ${
                page === p ? "bg-gray-900 text-white" : "border hover:bg-gray-50"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-1.5 rounded-md border hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}