# Research-Prompts · Monthly Vendor-Refresh-Workflow

Diese Prompts werden quartalsweise (~30 Min Operator-Zeit) gegen Claude / GPT gefeuert um die System-Daten in `data/data.csv` aktuell zu halten.

## Workflow

```
1. Master-Prompt aus PROMPTS.md kopieren, in Claude/GPT ausführen
   → LLM gibt 12 CSV-Blöcke zurück (1 pro Kategorie)

2. Pro Kategorie-CSV: Werte gegen current data.csv vergleichen
   → entweder manuell oder via DIFF-Prompt (s.u.)

3. data/data.csv updaten (Werte ändern, Systeme hinzufügen/entfernen)

4. data/REFRESH_DATE auf aktuelles Datum setzen (YYYY-MM-DD)

5. pnpm gen:data
   → schreibt src/components/labs/ai-stack-fit/systems.generated.ts

6. pnpm check (CI: pnpm check:data)
   → muss grün sein, sonst CSV ist invalid

7. git commit + push
   → Daten-Stand-Banner im Tool zeigt automatisch das neue Datum
```

## Files

- **PROMPTS.md** — alle 12 Kategorie-Prompts + Master-Prompt + Diff-Prompt
- **README.md** — du bist hier

## Wichtig

- **IDs müssen stabil bleiben** wenn ein System weiter relevant ist. Master-Prompt enthält die existing IDs als Hint.
- **Score-Werte** (base, ai, eu, cost) sind eigene Einschätzung — keine offiziellen Vendor-Daten. Ändere zurückhaltend, nur bei klaren Veränderungen (neuer Tier, AI-Act-Änderung, Pricing-Reform).
- **note**-Texte sind kurze Pro/Contra-Sätze für DACH-KMU, max ~80 Zeichen.
