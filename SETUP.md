# Setup Guide

## 1. Airtable — Create your tables

1. Go to [airtable.com](https://airtable.com) and sign in.
2. Click **Add a base** → **Start from scratch** → name it `Quit Smoking Surveys`.
3. You'll land on a default table. Rename it to `Current Smokers` (double-click the tab).
4. Create a second table and name it `Ex-Smokers` (click the **+** next to the first tab).

### Fields to add to "Current Smokers"

The first field is called **Name** by default — rename it to `Submitted At` and set type to **Single line text** (or Date, if you prefer sorting by date).

Add these fields (click the **+** column header, choose type):

| Field name | Type |
|---|---|
| Current Status | Single line text |
| Smoking Duration | Single line text |
| Quit Attempts | Single line text |
| Feeling Behind Smoking | Long text |
| Discomfort Scale | Number |
| Response to Feeling | Long text |
| Resonance Statement | Single line text |
| Methods Tried | Long text |
| What Was Missing | Long text |
| What Would Help | Long text |
| Community Importance | Number |
| Meaningful Support | Long text |
| Program Features | Long text |
| Willingness to Pay | Single line text |
| Trust in Creator | Single line text |
| Additional Comments | Long text |

### Fields to add to "Ex-Smokers"

Rename the first field to `Submitted At` (Single line text), then add:

| Field name | Type |
|---|---|
| Time Since Quitting | Single line text |
| Previous Quit Attempts | Single line text |
| Smoking Duration | Single line text |
| Different Moment Existed | Single line text |
| Pivotal Moment | Long text |
| Physical Withdrawal | Long text |
| How Got Through It | Long text |
| Real Reason for Smoking | Long text |
| Emptiness After Quitting | Single line text |
| Methods Used | Long text |
| Most Important Factor | Long text |
| Community Role | Single line text |
| What Should Have Existed | Long text |
| Message at Hardest Moment | Long text |
| Emptiness Statement | Single line text |
| Willingness to Share | Single line text |
| Additional Comments | Long text |

---

## 2. Get your Airtable credentials

### Personal Access Token

1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Click **Create new token**
3. Name it `Quit Smoking Surveys`
4. **Scopes** — add: `data.records:write`
5. **Access** — add your `Quit Smoking Surveys` base
6. Click **Create token** and copy it — you won't see it again

### Base ID

1. Open your base in Airtable
2. Look at the URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. The Base ID is the `appXXXXXXXXXXXXXX` part — copy it

---

## 3. Deploy to Vercel via GitHub

### Push to GitHub

```bash
cd "/Users/colleen/CLAUDE PROJECTS/quit-smoking-surveys"
git init
git add .
git commit -m "Initial commit"
```

Then:
1. Go to [github.com/new](https://github.com/new)
2. Create a new repo called `quit-smoking-surveys` (private is fine)
3. Follow the "push an existing repo" instructions GitHub shows you

### Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or sign up — it's free)
2. Click **Add New → Project**
3. Import your `quit-smoking-surveys` GitHub repo
4. Vercel auto-detects the setup — no changes needed
5. Before clicking **Deploy**, click **Environment Variables** and add:

| Name | Value |
|---|---|
| `AIRTABLE_TOKEN` | your Personal Access Token |
| `AIRTABLE_BASE_ID` | your Base ID (starts with `app`) |

6. Click **Deploy**

Your surveys will be live at:
- `https://your-project.vercel.app/current-smokers`
- `https://your-project.vercel.app/ex-smokers`

---

## 4. Test it

Before sharing the links, submit one test response in each survey. Check your Airtable tables — you should see a new row appear within a few seconds.

If it doesn't work, go to **Vercel → your project → Functions** tab and check the logs for error details.
