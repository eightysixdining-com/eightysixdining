import React, { useState } from 'react'
import { Copy, Check, ExternalLink, Mail } from 'lucide-react'

interface EmailLinkProps {
  email: string
  subject?: string
  className?: string
  showActions?: boolean
}

export function EmailLink({ email, subject = "eightysix dining Inquiry", className = "", showActions = true }: EmailLinkProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`

  return (
    <div className="inline-flex items-center gap-2 flex-wrap">
      <a
        href={mailtoUrl}
        className={`hover:underline font-medium transition-colors ${className || 'text-white'}`}
        title={`Click to email ${email}`}
      >
        {email}
      </a>

      {showActions && (
        <div className="inline-flex items-center gap-1.5 ml-1">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            type="button"
            className="p-1 rounded bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer text-[10px] flex items-center gap-1"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 text-[9px]">Copied!</span>
              </>
            ) : (
              <Copy className="w-3 h-3 text-neutral-400 hover:text-white" />
            )}
          </button>

          {/* Open in Gmail Button */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded bg-white/10 hover:bg-white/20 text-neutral-400 hover:text-white transition-colors text-[9px] flex items-center gap-0.5"
            title="Open in Gmail"
          >
            <span>Gmail</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      )}
    </div>
  )
}
