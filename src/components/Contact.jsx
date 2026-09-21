import { useRef, useState } from 'react'
import useInView from '../hooks/useInView'
import {
  ChatIcon,
  CheckIcon,
  CopyIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SendIcon,
} from './icons/BrandIcons'
import './Contact.css'
import { SOCIALS } from '../data/socials'

/* ─────────────────────────────────────────────────────────────
   PLACEHOLDER DETAILS — swap these for the real ones.
   The email address here is also where the contact form sends.
   ───────────────────────────────────────────────────────────── */
const CONTACT = {
  name: 'Kavinda Malwewa',
  tagline: 'B.Sc. IT Undergraduate • Rajarata University of Sri Lanka',
  email: 'kavindamalwewa99@gmail.com',
  phone: '+94 742905215',
  location: 'Kandy, Sri Lanka',
  linkedin: SOCIALS.linkedin,
  github: SOCIALS.github,
}

/** Copy-to-clipboard row with a short-lived confirmation. */
function CopyRow({ Icon, tone, label, value, href }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard blocked (insecure context or denied permission) — the value
      // stays visible and selectable, so nothing is lost.
      setCopied(false)
    }
  }

  return (
    <div className={`inforow inforow--${tone}`}>
      <span className="inforow__badge">
        <Icon className="inforow__icon" aria-hidden="true" />
      </span>
      <span className="inforow__text">
        <span className="inforow__label">{label}</span>
        <a className="inforow__value" href={href}>
          {value}
        </a>
      </span>
      <button
        type="button"
        className={`inforow__copy ${copied ? 'is-copied' : ''}`}
        onClick={copy}
        aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
      >
        {copied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
      </button>
    </div>
  )
}

function MessageForm() {
  const [status, setStatus] = useState(null)

  /**
   * No backend here: this hands the message to the visitor's mail client.
   * To collect submissions instead, POST the `data` object to Formspree /
   * EmailJS / your own endpoint in place of the mailto handoff below.
   */
  const onSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))

    const subject = `Portfolio enquiry from ${data.name}`
    const body = `${data.message}\n\n--\n${data.name}\n${data.email}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setStatus('Opening your email app with the message ready to send.')
  }

  return (
    <form className="msgcard" onSubmit={onSubmit}>
      <h3 className="msgcard__title">Send Me a Message</h3>

      <label className="field">
        <span className="field__label">
          Your name <b aria-hidden="true">*</b>
        </span>
        <input
          className="field__input"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g. Udith Perera"
        />
      </label>

      <label className="field">
        <span className="field__label">
          Your email <b aria-hidden="true">*</b>
        </span>
        <input
          className="field__input"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="e.g. udith.perera@example.com"
        />
      </label>

      <label className="field">
        <span className="field__label">
          Your message <b aria-hidden="true">*</b>
        </span>
        <textarea
          className="field__input field__input--area"
          name="message"
          rows="5"
          required
          placeholder="Discuss project ideas, internship opportunities, or general inquiries..."
        />
      </label>

      <button className="msgcard__send" type="submit">
        <SendIcon className="msgcard__sendIcon" aria-hidden="true" />
        Send Message
      </button>

      <p className="msgcard__status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  )
}

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section className="section contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="shell">
        <header className="contact__head">
          <p className="pill">
            <ChatIcon className="pill__icon" aria-hidden="true" />
            Let&apos;s Talk
          </p>
          <h2 className="contact__title">
            Let&apos;s Build <span className="contact__grad">Something Amazing</span>
          </h2>
          <p className="contact__note">
            Internships, academic collaborations, code review, or just a thoughtful
            technical conversation &mdash; I read every message, and I&apos;ll reply at
            the address you provide.
          </p>
          <span className="contact__rule" aria-hidden="true" />
        </header>

        <div className={`contact__grid reveal ${inView ? 'is-visible' : ''}`} ref={ref}>
          <div className="contact__left" style={{ '--i': 0 }}>
            <div className="infocard">
              <h3 className="infocard__name">{CONTACT.name}</h3>
              <p className="infocard__tagline">{CONTACT.tagline}</p>

              <CopyRow
                Icon={MailIcon}
                tone="cyan"
                label="Email address"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <CopyRow
                Icon={PhoneIcon}
                tone="violet"
                label="Phone number"
                value={CONTACT.phone}
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              />

              <div className="infocard__socials">
                <a
                  className="social"
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkedInIcon className="social__icon" aria-hidden="true" />
                  <span className="social__text">
                    <b>LinkedIn</b>
                    <i>Connect</i>
                  </span>
                </a>
                <a
                  className="social"
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHubIcon className="social__icon" aria-hidden="true" />
                  <span className="social__text">
                    <b>GitHub</b>
                    <i>Projects</i>
                  </span>
                </a>
              </div>

              <p className="infocard__location">
                <PinIcon className="infocard__pin" aria-hidden="true" />
                Location: {CONTACT.location}
              </p>
            </div>

          </div>

          <div style={{ '--i': 1 }}>
            <MessageForm />
          </div>
        </div>
      </div>
    </section>
  )
}
