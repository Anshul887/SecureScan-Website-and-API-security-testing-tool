import axios from "axios";

export async function corsScan(
  url: string
) {

  const findings = [];

  const response =
    await axios.get(url);

  const corsHeader =
    response.headers[
      "access-control-allow-origin"
    ];

  if (
    corsHeader === "*"
  ) {

    findings.push({
      title:
        "Permissive CORS",

      severity: "MEDIUM",

      description:
        "Wildcard origin detected.",

      recommendation:
        "Restrict allowed origins."
    });
  }

  return findings;
}
