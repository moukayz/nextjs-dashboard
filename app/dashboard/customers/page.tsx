import { lusitana } from "@/app/ui/fonts";

export default function Customers() {
    return <p className={`${lusitana.className} hover:text-red-300 hover:shadow-md hover:scale-105 transition-all  duration-300 p-4 border-b-2 border-grey-300 w-1/2`}>
        Customers Page
    </p>
}