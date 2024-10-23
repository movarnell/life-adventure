import { ReactNode } from "react"

type Props = {
  location: [number, number]
  children: ReactNode
}
export default function Pin({ location: [x, y], children }: Props) {
  return (
    <div
      className="absolute bg-green-400 border-green-600 border-4 shadow shadow-black rounded-full size-14 text-center text-offwhite p-3 transition-all"
      style={{ top: x, left: y }}
    >
      <span className="font-bold">{children}</span>
    </div>
  )
}