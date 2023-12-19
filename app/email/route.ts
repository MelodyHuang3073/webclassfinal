import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const smtpOptions = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };
  try {
    const transporter = nodemailer.createTransport(smtpOptions);
    const data = await request.json();
    console.log("body:", data);
    const template = `
    <p>&nbsp;</p>
<div id="__react-email-preview" style="display: none; overflow: hidden; line-height: 1px; opacity: 0; max-height: 0; max-width: 0;">Yelp recent login
<div>&zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm; &zwnj;​&zwj;&lrm;&rlm;</div>
</div>
<table style="max-width: 37.5em;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr style="width: 100%;">
<td>
<table style="border: 1px solid rgb(0,0,0, 0.1); border-radius: 3px; overflow: hidden;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td><span style="font-family: 'book antiqua', palatino, serif;"><img style="display: block; outline: none; border: none; text-decoration: none;" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-header.png" width="620"></span>
<table style="padding: 20px 40px; padding-bottom: 0;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody style="width: 100%;">
<tr style="width: 100%;">
<td>
<h1 style="font-size: 32px; font-weight: bold;"><span style="font-size: 18pt; font-family: 'andale mono', monospace;">您好~ 親愛的QAmpus用戶</span></h1>
<p><span style="font-family: 'andale mono', monospace;">祝您有個充實美好的一天！</span></p>
<p>${data.html}</p>
<p>&nbsp;</p>
<p><span style="font-family: 'andale mono', monospace;">Best ,</span></p>
<p><span style="font-family: 'andale mono', monospace;">QAmpus系統團隊</span></p>
</td>
</tr>
</tbody>
</table>
<table style="padding: 20px 40px; padding-top: 0;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody style="width: 100%;">
<tr style="width: 100%;">
<td style="display: flex; justify-content: center; width: 100%;" colspan="2"><a style="background-color: #e00707; padding: 0px 0px; border-radius: 3px; color: white; font-weight: bold; border: 1px solid cadetblue; cursor: pointer; line-height: 100%; text-decoration: none; display: inline-block; max-width: 100%;" target="_blank"><!-- [if mso]><i style="letter-spacing: undefinedpx;mso-font-width:-100%;mso-text-raise:0" hidden>&nbsp;</i><![endif]--><span style="background-color: cadetblue; padding: 12px 30px; border-radius: 3px; color: #fff; font-weight: bold; border: 1px solid rgb(0,0,0, 0.1); cursor: pointer; max-width: 100%; display: inline-block; line-height: 120%; text-decoration: none; text-transform: none; mso-padding-alt: 0px; mso-text-raise: 0;">前往QAmpus系統&rarr;</span><!-- [if mso]><i style="letter-spacing: undefinedpx;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table style="padding: 45px 0 0 0;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td><img style="display: block; outline: none; border: none; text-decoration: none;" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-footer.png" width="620"></td>
</tr>
</tbody>
</table>
<p style="font-size: 12px; line-height: 24px; margin: 16px 0; text-align: center; color: rgb(0,0,0, 0.7);">&copy; 輔仁大學資訊管理學系NextWEB測試系統</p>
</td>
</tr>
</tbody>
</table>
`;
    if (data) {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: data.email,
        subject: data.subject,
        html: template,
      });
      return NextResponse.json({ message: "成功送出信件" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "error" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
