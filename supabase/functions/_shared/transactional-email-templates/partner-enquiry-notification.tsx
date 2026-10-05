import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const FIELDS: [string, string][] = [
  ['name', 'Name'], ['email', 'Work email'], ['company', 'Company'], ['website', 'Website'],
  ['partnerType', 'Partner type'], ['region', 'Country or region'], ['platform', 'Platform or product'],
  ['venues', 'Venues or customers'], ['message', 'Message'],
]

const PartnerEnquiryEmail = (props: Record<string, string>) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Partner enquiry from {props.company || 'a prospect'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Partner enquiry</Heading>
        <Hr style={hr} />
        <Section>
          {FIELDS.map(([k, l]) => (
            <React.Fragment key={k}>
              <Text style={label}>{l}</Text>
              <Text style={value}>{props[k] || '—'}</Text>
            </React.Fragment>
          ))}
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: PartnerEnquiryEmail,
  subject: (d: Record<string, any>) => `Partner enquiry – ${d.company || 'Unknown'}`,
  displayName: 'Partner enquiry notification',
  to: 'anita.w@greenedesk.com',
  previewData: { name: 'Jane', email: 'jane@example.com', company: 'Acme', partnerType: 'Referral or reseller', region: 'UAE' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '30px 25px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1e293b', margin: '0 0 20px' }
const hr = { borderColor: '#e2e8f0', margin: '20px 0' }
const label = { fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' as const, margin: '12px 0 2px', fontWeight: '600' as const }
const value = { fontSize: '15px', color: '#1e293b', margin: '0 0 8px' }
