# Research-Prompts (full set)

12 Kategorie-Prompts + 1 Master-Prompt (führt alle 12 sequentiell aus) + 1 Diff-Prompt (vergleicht alt vs neu).

Stand: 2026-05-09.

---

## MASTER · alle 12 Kategorien sequentiell

```
Du bist Tech-Stack-Analyst für DACH-Mittelstand (50-1.000 MA).
Heutiges Datum: ${TODAY}. Letzter Daten-Stand: ${LAST_REFRESH}.

Aufgabe: gib für JEDE der folgenden 12 Kategorien einen CSV-Block
mit den 4-8 wichtigsten Anbietern aus Sicht eines deutschen
Mittelständlers. CSV-Header pro Block:

id,cat,label,family,sizes,strat,base,ai,eu,cost,note

Spaltenbedeutung:
- id: kurzer Slug (5-12 chars), stabil über Refreshs
- cat: die Kategorie-id (siehe unten)
- label: Marketing-Name
- family: ms / google / oss / atlassian / salesforce / sap / aws / apple
- sizes: kommaseparierte Liste aus micro,small,mid,large,xl
        (Welche MA-Buckets passen? micro=1-10, small=11-50, mid=51-250,
        large=251-1000, xl=1000+)
- strat: kommaseparierte Liste aus ms,google,best,cost,eu
        (Zu welcher Strategie passt das System?)
- base: Marktposition + Reife 0-100 (eigene Einschätzung)
- ai: AI-Reife der Plattform 0-100
- eu: EU-Souveränität 0-100 (Hosting, AI-Act, AVV)
- cost: Kostenstufe 1-5 (1=billig/OSS, 5=Enterprise)
- note: 1-Satz Pro/Contra für DACH-Mittelstand, max 80 Zeichen,
        keine Anführungszeichen, kein Komma am Anfang/Ende

Existing IDs (behalten wenn weiter relevant):
${EXISTING_IDS}

Die 12 Kategorien:
01 office     — Office & Produktivität (M365, Workspace, LibreOffice...)
02 ai         — AI-Assistenten (Copilot, ChatGPT, Claude, Gemini, Mistral...)
03 comm       — Kommunikation (Teams, Slack, Google Chat...)
04 knowledge  — Wissensbasis (SharePoint, Confluence, Notion, Outline...)
05 crm        — CRM (HubSpot, Salesforce, Dynamics, Pipedrive...)
06 erp        — ERP (SAP, Dynamics 365, Odoo, NetSuite...)
07 data       — Daten / Warehouse (Fabric, BigQuery, Snowflake, Databricks...)
08 automation — Workflow Automation (Power Automate, n8n, Make, Zapier...)
09 dev        — Dev Tools (GitHub Copilot, GitLab, Cursor...)
10 marketing  — Marketing Automation (HubSpot, Marketo, Customer.io, Brevo...)
11 support    — Customer Support (Zendesk, Intercom, Freshdesk...)
12 cloud      — Cloud-Infrastruktur (Azure, AWS, GCP, Hetzner...)

Output-Format pro Kategorie:
```
## CATEGORY 02 · AI-Assistant
id,cat,label,family,sizes,strat,base,ai,eu,cost,note
copilot,ai,Microsoft 365 Copilot,ms,"small,mid,large,xl",ms,72,90,65,4,Pflicht wenn M365 das Backbone ist.
chatgpt,ai,ChatGPT Enterprise,oss,"micro,small,mid,large,xl",best,80,95,50,4,Stärkstes Allround-Modell EU-Standort optional.
...
```

Plus: nach allen 12 Blöcken ein 2-Absatz Summary "Trends seit
${LAST_REFRESH}", was sich verändert hat (neue Player, Pricing-Shifts,
EU-Act-Auswirkungen etc.).
```

---

## DIFF · alt vs neu vergleichen

```
Du vergleichst zwei CSV-Datasets mit Tech-Stack-Daten.

DATA_OLD (Stand ${OLD_DATE}):
[Inhalt von data/data.csv]

DATA_NEW (Recherche-Output):
[gemergt aus den 12 CATEGORY-Blöcken]

Aufgabe: zeige nur die Deltas als Markdown-Tabelle. Kategorisiere:

## Hinzugefügt (in NEW, nicht in OLD)
| id | label | warum jetzt relevant |
|---|---|---|

## Entfernt (in OLD, nicht in NEW)
| id | label | warum nicht mehr relevant |
|---|---|---|

## Geändert (id existiert in beiden, mind. 1 Feld unterschiedlich)
| id | feld | alt → neu | begründung |
|---|---|---|---|

Ziel: kurze Liste die der Operator review kann. Nur substanzielle
Änderungen aufnehmen — kein Cosmetic-Drift in note-Texten.
```

---

## Pro-Kategorie Prompts (für targeted refresh einer einzelnen Kategorie)

Jeder dieser 12 Prompts ist ein Ausschnitt aus dem Master, falls man nur eine Kategorie aktualisieren will (z.B. "AI ist gerade hot, alles andere passt").

### 01 · office

```
Recherchiere für Office & Produktivität (KMU DACH 50-1000 MA): liste
4-6 wichtigste Anbieter. CSV-Output:
id,cat,label,family,sizes,strat,base,ai,eu,cost,note
Existing IDs zum behalten: m365, gworkspace, libre.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 02 · ai

```
Recherchiere für AI-Assistenten (KMU DACH): liste 5-8 wichtigste
Anbieter. CSV-Output mit den Standard-Spalten. Existing IDs:
copilot, chatgpt, claude, gemini, mistral. Beachte besonders:
EU-Hosting-Optionen, AI-Act-Konformität, Datenresidenz.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 03 · comm

```
Recherchiere für Communication-Tools (KMU DACH): listen 3-5 Anbieter.
CSV-Output. Existing IDs: teams, slack, gchat.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 04 · knowledge

```
Recherchiere für Wissensbasis-Tools (KMU DACH): liste 4-6 Anbieter.
CSV-Output. Existing IDs: sharepoint, confluence, notion, outline.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 05 · crm

```
Recherchiere für CRM-Systeme (KMU DACH): liste 4-6 Anbieter mit Fokus
auf Mittelstand. CSV-Output. Existing IDs: hubspot, salesforce,
dynamicscrm, pipedrive.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 06 · erp

```
Recherchiere für ERP-Systeme (KMU DACH 50-1000 MA): liste 4-6 Anbieter,
inklusive Branchen-Spezialisten wenn relevant. CSV-Output.
Existing IDs: sap, dynamics, odoo, netsuite.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 07 · data

```
Recherchiere für Data-Warehouses und Lake-Tools (KMU DACH 50-1000 MA):
liste 3-5 Anbieter. CSV-Output. Existing IDs: fabric, bigquery,
snowflake, databricks.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 08 · automation

```
Recherchiere für Workflow-Automation (KMU DACH): liste 3-5 Anbieter.
Beachte EU-Hosting-Option (Mittelstand priorisiert oft selfhost).
CSV-Output. Existing IDs: powerauto, n8n, make, zapier.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 09 · dev

```
Recherchiere für Developer-Tools mit AI-Tier (DACH): liste 3-5
Anbieter. CSV-Output. Existing IDs: ghcopilot, gitlab, cursor.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 10 · marketing

```
Recherchiere für Marketing-Automation (KMU DACH): liste 4-5 Anbieter.
CSV-Output. Existing IDs: hsmkt, marketo, customerio, brevo.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 11 · support

```
Recherchiere für Customer-Support-Tools (KMU DACH): liste 4-5 Anbieter.
AI-Agent-Reife in der note erwähnen. CSV-Output. Existing IDs:
zendesk, intercom, freshdesk, hsservice.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```

### 12 · cloud

```
Recherchiere für Cloud-Infrastruktur (KMU DACH): liste 3-5 Anbieter
mit Fokus auf EU-Region-Verfügbarkeit. CSV-Output. Existing IDs:
azure, aws, gcp, hetzner.
Stand: ${TODAY}, letzter Refresh: ${LAST_REFRESH}.
```
