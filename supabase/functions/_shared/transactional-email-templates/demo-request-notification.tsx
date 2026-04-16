import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "GreeneDesk"

interface DemoRequestNotificationProps {
  orgType?: string
  currentSystem?: string
  locations?: string
  email?: string
  phone?: string
}

const DemoRequestNotificationEmail = ({
  orgType, currentSystem, locations, email, phone
}: DemoRequestNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New demo request from {email || 'a prospect'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Demo Request</Heading>
        <Text style={text}>A new demo has been requested on the {SITE_NAME} website.</Text>
        <Hr style={hr} />
        <Section style={detailsSection}>
          <Text style={label}>Organisation Type</Text>
          <Text style={value}>{orgType || '—'}</Text>
          <Text style={label}>Current System</Text>
          <Text style={value}>{currentSystem || '—'}</Text>
          <Text style={label}>Locations</Text>
          <Text style={value}>{locations || '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          <Text style={label}>Phone</Text>
          <Text style={value}>{phone || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This is an automated notification from {SITE_NAME}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: DemoRequestNotificationEmail,
  subject: (data: Record<string, any>) => `New Demo Request – ${data.orgType || 'Unknown Type'}`,
  displayName: 'Demo request notification',
  to: 'anita.w@greenedesk.com',
  previewData: {
    orgType: 'Leisure Centre / Council',
    currentSystem: 'PerfectGym',
    locations: '2–5',
    email: 'jane@example.com',
    phone: '0400 000 000',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '30px 25px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1e293b', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.5', margin: '0 0 12px' }
const hr = { borderColor: '#e2e8f0', margin: '20px 0' }
const detailsSection = { margin: '0' }
const label = { fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '12px 0 2px', fontWeight: '600' as const }
const value = { fontSize: '15px', color: '#1e293b', margin: '0 0 8px' }
const footer = { fontSize: '12px', color: '#94a3b8', margin: '20px 0 0' }
