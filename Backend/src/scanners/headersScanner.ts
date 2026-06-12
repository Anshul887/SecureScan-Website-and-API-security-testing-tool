import axios from "axios";

export async function scanHeaders(
  url: string
) {

  const response =
    await axios.get(url);

  const headers =
    response.headers;

  const findings = [];

  if (
    !headers["content-security-policy"]
  ) {
    findings.push({
      title:
        "Missing Content Security Policy",

      severity: "HIGH",

      description:
        "CSP header not found.",

      recommendation:
        "Add Content-Security-Policy."
    });
  }

  if (
    !headers["x-frame-options"]
  ) {
    findings.push({
      title:
        "Missing X-Frame-Options",

      severity: "MEDIUM",

      description:
        "Clickjacking protection missing.",

      recommendation:
        "Add X-Frame-Options."
    });
  }

  if (
    !headers[
      "strict-transport-security"
    ]
  ) {
    findings.push({
      title:
        "Missing HSTS",

      severity: "HIGH",

      description:
        "Strict Transport Security disabled.",

      recommendation:
        "Enable HSTS."
    });
  }

  return findings;
}
