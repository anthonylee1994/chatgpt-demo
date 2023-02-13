import {openai} from "./util/openai";

(async () => {
    const coverLetter = `Dear HR Manager,

My name is Bob, and I am applying for the full-stack developer position at Pinnacle Enterprise Limited. I am 28 years old and I have 7 years of professional experience in the industry. 

My skillset includes TypeScript, React, Node.js, Spring Boot, MySQL, Redis, Docker, Kubernetes, and GCP. As a full-stack developer, I am comfortable with various aspects of software development and I am eager to apply my skills and expertise to your company. 

I believe that I have the right set of skills and experience to be an asset to your team and am confident that I can make a positive impact on your organization. 

I look forward to hearing from you and discussing my skills in further detail. 

Thank you for your consideration. 

Sincerely, 

Bob`;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Here is the cover letter:
---
${coverLetter}
---

Can you extract the data to the following JSON format?
{name: string, age: number, skills: string[], jobTitle: string, company: string, recipient: string, yearExperience: number

Response:`,
        max_tokens: 300,
    });

    console.log(response.data.choices[0].text);
})();


// Expected output:
// {
//     "name": "Bob",
//     "age": 28,
//     "skills": ["TypeScript", "React", "Node.js", "Spring Boot", "MySQL", "Redis", "Docker", "Kubernetes", "GCP"],
//     "jobTitle": "Full-stack Developer",
//     "company": "Pinnacle Enterprise Limited",
//     "recipient": "HR Manager",
//     "yearExperience": 7
// }
