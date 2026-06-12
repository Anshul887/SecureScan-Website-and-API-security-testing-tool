export async function sslScan(
  url: string
) {

  const findings = [];

  if (
    !url.startsWith("https://")
  ) {

    findings.push({
      title:
        "HTTPS Not Enabled",

      severity: "CRITICAL",

      description:
        "Website not using HTTPS.",

      recommendation:
        "Install SSL certificate."
    });
  }

  return findings;
}
