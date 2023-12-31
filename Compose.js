function sendEmailsScript() {
  // Open the active spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Get data range
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();

  // Get the current date
  var currentDate = new Date();

  // Start from the second row to skip the header
  for (var i = 1; i < data.length; i++) {
    var row = data[i];

    // Extracting values from the row
    var recipientName = row[0]; // Assuming 'Name' is in column A
    var rating = row[1]; // Assuming 'Rating' is in column B
    var reviews = row[2]; // Assuming 'Reviews' is in column C
    var category = row[3]; // Assuming 'Category' is in column D
    var recipientEmail = row[4]; // Assuming 'Email' is in column E

    // Compose the email subject and body with HTML formatting
    var subject = recipientName + "'s Untouched Growth 4 Possibilities";
    var body = "<p>Dear <b>" + recipientName + "</b>,</p><p>I trust this message finds you well.</p>" +
      "<p>My name is Mallick, representing Just Because Media, a distinguished five-star digital marketing agency headquartered in Connecticut.</p>" +
      "<p>Over the course of our ongoing industry analysis, we have closely observed <b>" + recipientName + "</b>, recognizing the agency's esteemed reputation within the <b>" + category + "</b> sector.</p>";

    // Check if reviews are 0
    if (reviews == 0) {
      body += "<p>We understand that currently, there are no reviews showcasing your agency's capabilities. This presents a unique opportunity for you to leverage our services and establish a strong online presence. Our expertise in digital marketing can help you build credibility and reach a wider audience, ultimately enhancing your agency's success.</p>";
    } else {
      body += "<p>Impressed by your commitment to delivering exemplary solutions with <b>" + recipientName + "'s " + rating + " rating based on " + reviews + "</b>, affirming your agency's dedication to excellence.</p>";
    }

    body += "<p>Through our research, it has come to our attention that there may be untapped opportunities for enhancement within your business.</p>" +
      "<p>At Just Because Media, we specialize in maximizing these opportunities, driving a significant increase in return on investment (ROI) for our clients.</p>" +
      "<p>Should you be open to exploration, I invite you to respond to this email at your earliest convenience.</p>" +
      "<p>Upon your confirmation, a member of our team will reach out to you promptly, providing insights into how Just Because Media can contribute to the continued success of your agency.</p>" +
      "<p>Thank you for considering this proposition, and I look forward to the possibility of collaborating with <b>" + recipientName + "</b>.</p>" +
      "<p>Best Regards,</p><p>Biddrup<br>Just Because Media</p>";

    // Send the email
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      htmlBody: body, // Set the HTML body for formatting
    });

    // Update the date in the F column
    sheet.getRange(i + 1, 6).setValue(currentDate); // Assuming the F column is column 6
  }
}
