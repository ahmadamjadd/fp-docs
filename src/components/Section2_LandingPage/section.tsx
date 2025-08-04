import Illustration from "./Illustration"
import Content from "./content"
import CodeBlock from "./CodeBlock"

const codeBlock1 = `function getUserByEmail(user: { email?: string }): string | null {
    return user.email ? user.email : null;
}

function getUserAddress(user: { email?: string }): string | null {
    return user.email ? "Some Address" : null;
}

const email = getUserByEmail({ email: "test@test.com" });

if (email) {
    const address = getUserAddress({ email });
    if (address) {
        console.log(\`User \${email} has address: \${address}\`);
    } else {
        console.error("Address not found");
    }
} else {
    console.error("Email not found");
}
// Output: User test@test.com has address: Some Address
`

const codeBlock2 = String.raw`import { Option, matchOpt } from "@carbonteq/fp";

function getUserByEmail(user: { email?: string }): Option<string> {
  return user.email ? Option.Some(user.email) : Option.None;
}

function getUserAddress(user: { email?: string }): Option<string> {
  return user.email ? Option.Some("Some Address") : Option.None;
}

const res = getUserByEmail({ email: "test@test.com" }).flatZip((email) =>
  getUserAddress({ email }),
);

matchOpt(res, {
  Some: (res) => {
    console.log(\`User \${res[0]} has address: \${res[1]}\`);
  },
  None: () => {
    console.error("User or Address not found");
  },
});`;


export default function Section2() {
  return (
    <section className="flex flex-col items-center px-10 py-[140px] gap-[120px] w-full max-w-[1920px] mx-auto relative">
      <div className="flex flex-col items-start gap-[72px] w-[1440px]">
        {/* Top container */}
        <div className="flex flex-row justify-between items-start gap-[40px] w-full">
          <Illustration />
          <Content />
        </div>
        {/* Code Comparison */}
        <div className="flex flex-row justify-between items-stretch gap-[40px] w-full">
          <div className="flex-1">
            <CodeBlock title="With FP Library" code={codeBlock2} />
          </div>
          <div className="flex-1">
            <CodeBlock title="Without FP Library" code={codeBlock1} />
          </div>
        </div>
      </div>
    </section>
  )
}
