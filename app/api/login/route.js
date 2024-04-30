import { NextResponse } from "next/server";
import { transporter } from "../nodemailer";
import { regEx } from "@/components/regEx";
import pool from "@/app/libs/mysql";

export async function POST(req) {
   const db = await pool;
   const q = "INSERT INTO submit_work (name,email,date,subject,message,phone) VALUES (?,?,?,?,?,?)";
  try {
    const data = await req.json();
    if (
      data.name.length > 0 &&
      data.phone.length > 9 &&
      data.subject.length > 0 &&
      data.datetime.length > 0 &&
      regEx[0].emailRegex.test(data.email) === true
    ) {
      const res = await db.query(q,[data.name,data.email,data.datetime,data.subject,data.message,data.phone])
      const info = {
        from: '"Examhelp" <noreply@examhelp.online>',
          to: "dhamija.piyush7@gmail.com, calinfo70@gmail.com",
      //   to: "akshit.calinfo07@gmail.com",
        subject: `Request from ${data.name} with Order Id : MAT-${res[0].insertId}`,
        html: `<table cellpadding="0" style="width:100%;">
        <tbody>
           <tr style="width:100%;clear:both">
              <td style="width:70%;display:block;clear:both">
                 <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-top:30px;margin-bottom:30px;background-clip:padding-box;border-collapse:collapse;border-color:#dddddd;border-radius:0 0 3px 3px;border-style:solid solid none;border-width:0 1px 1px">
        <tbody>
           <tr>
              <td height="3" bgcolor="#d91212"></td>
           </tr>
           <tr style="height:100px">
           <td align="center"  bgcolor="#fff" Top-border-color="#0e1d66" height="30"><img src ="' . $img . '
           ">
           </td>
           </tr>
           <tr>
              <td bgcolor="#F7F9F9">
                 <table style="width:100%;clear:both" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tbody>
                       <tr>
                          <td height="2px;"></td>
                       </tr>
                       <tr>
                          <td height="2px;"></td>
                       </tr>
                       <tr>
                          <td>
                             <table rules="all" style="border-color: #666;" cellpadding="12;" width="100%;">                             
                     
                             <tr>
                             <td style="color:#101010;font-size:16px;"><strong>Name:</strong> </td>
                             <td style="color:#101010;font-size:16px;">${data.name}</td>
                          </tr>
                          <tr>
                          <td style="color:#101010;font-size:16px;"><strong>Deadline:</strong> </td>
                          <td style="color:#101010;font-size:16px;">${data.datetime}</td>
                       </tr>
                          <tr>
                          <td style="color:#101010;font-size:16px;"><strong>E-mail:</strong> </td>
                          <td style="color:#101010;font-size:16px;">${data.email}</td>
                       </tr>
                       <tr>
                       <td style="color:#101010;font-size:16px;"><strong>Phone:</strong> </td>
                       <td style="color:#101010;font-size:16px;">${data.phone}</td>
                    </tr>   
                    <tr>
                    <td style="color:#101010;font-size:16px;"><strong>Subject:</strong> </td>
                    <td style="color:#101010;font-size:16px;">${data.subject}</td>
                 </tr>                             
                    <tr>   
                          <td style="color:#101010;font-size:16px;"><strong>Message:</strong> </td>
                          <td style="color:#101010;font-size:16px;">${data.message}</td>
                       </tr>  
                                        
                    </tbody>
                 </table>
                 <br>
              </td>
           </tr>
           <tr>
              <td align="center" bgcolor="#c80101" height="50"><font face="Segoe UI,Trebuchet MS,Arial, Helvetica, sans-serif" color="#fff" style="font-size:13px"> &copy; ${new Date().getFullYear()}<b> MatlabAssignmentHelp</b> All rights reserved. </font></td>
           </tr>
        </tbody>
     </table>`,
      };
      await transporter.sendMail(info);
      return NextResponse.json({ message: "Mail sent Successfully" });
    } else {
      throw err;
    }
  } catch (err) {
    return NextResponse.json({  err });
  }
}
