import {
  Shield,
  ShieldCheck,
  Banknote,
  Database,
  BarChart,
  Lock,
  FileCheck,
  Layers,
  ShoppingCart,
  ExternalLink,
  Code,
  LineChart,
  Search,
  Upload,
  Download,
} from "lucide-react"

export type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  shield: Shield,
  shieldCheck: ShieldCheck,
  banknote: Banknote,
  database: Database,
  chart: BarChart,
  lock: Lock,
  fileCheck: FileCheck,
  layers: Layers,
  cart: ShoppingCart,
  link: ExternalLink,
  code: Code,
  lineChart: LineChart,
  search: Search,
  upload: Upload,
  download: Download,
  logo: ({ ...props }: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}
