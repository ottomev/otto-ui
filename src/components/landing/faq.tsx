import { cn } from "@/lib/utils"
import Divider from "@/components/landing/divider"
import Rule from "@/components/landing/rule"

const faqs = [
  {
    question: "Is Otto UI free to use?",
    answer: "Yes, Otto UI is completely free",
  },
  {
    question: "What is Otto UI?",
    answer:
      "Otto UI is a collection of beautifully designed React components with smooth animations, built using React, Tailwind CSS, and  It aims to provide reusable UI components that enhance user experience.",
  },
  {
    question: "What features does Otto UI offer?",
    answer:
      "Otto UI offers smooth animations, responsive design, easy-to-use APIs, customization with Tailwind CSS, and built-in dark mode support.",
  },
  {
    question: "How do I install Otto UI?",
    answer:
      "Install the required dependencies using: pnpm install motion tailwindcss lucide-react clsx tailwind-merge.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Yes, you can easily customize Otto UI components using Tailwind CSS utility classes.",
  },
  {
    question: "Does Otto UI support dark mode?",
    answer:
      "Yes, all components support both light and dark themes out of the box.",
  },
  {
    question: "How can I contribute to Otto UI?",
    answer:
      "You can contribute by forking the repository, creating a new branch, making your changes, and submitting a pull request on GitHub.",
  },
  // Add more FAQs...
]

export function FAQ() {
  return (
    <section className="bg-black relative w-full px-8 py-24">
      <Divider />
      <h2 className="font-title text-foreground text-center text-3xl font-bold transition">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto mt-16 max-w-3xl space-y-8">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className={cn(
              "hover:gradient-brand group bg-smooth-100 relative flex flex-col rounded-2xl p-6 backdrop-blur-lg transition-all",
              "shadow-custom"
            )}
          >
            <h3 className="text-foreground text-lg font-semibold transition group-hover:text-white">
              {faq.question}
            </h3>
            <p className="text-primary-foreground group-hover: mt-2 transition group-hover:text-white">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
