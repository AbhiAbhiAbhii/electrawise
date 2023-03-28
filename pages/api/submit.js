import { google, GoogleApis } from "googleapis"

export default async function submit(req, res) {
    if(req.method === 'POST') {
        const {fullName, phoneNumber, email, location} = req.body
     
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email:process.env.CLIENT_EMAIL,
                client_id:process.env.CLIENT_ID,
                private_key:process.env.PRIVATE_KEY
            }, 
             scopes: [
                 'https://www.googleapis.com/auth/drive',
                 'https://www.googleapis.com/auth/drive.file',
                 'https://www.googleapis.com/auth/spreadsheets'
             ],
        });

        // call to the googlesheet
        const sheets = google.sheets({ // passing an authentication object
            auth,
            version:'v4'
        })
        // call to the api
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId:'1PCSLl7Fw-XBaXjb45F7yzni79EDzr5uLiKPiO4_3n2A',
            range:'Sheet1!A2:D',
            valueInputOption:'USER_ENTERED',
            requestBody: {
                values:[[fullName, phoneNumber, email, location]]
            }
        })
        res.status(201).json({message:"Data successfully exported to sheets"})
    }
    res.status(200).send("Success")
}