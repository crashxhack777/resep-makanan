import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className={`sm:text-3xl text-2xl font-bold mb-8 ${playfair_display.className}`}>{ title }</h1>
  )
}

export default Title
