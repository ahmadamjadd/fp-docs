import ExampleTabs from "./Tabs";

const tabsData = [

  {
    name: "No Nulls",
    blocks: [
      {
        title: "With FP",
        lang: "ts",
        code: `import { Option, matchOpt } from "@carbonteq/fp";

function getUserEmail(user: { email?: string }): Option<string> {
  return user.email ? Option.Some(user.email) : Option.None;
}

const email = getUserEmail({ email: "test@test.com" });
matchOpt(email, {
  Some: (email) => console.log(\`User email: \${email}\`),
  None: () => console.error("Email not found"),
});`,
      },
      {
        title: "Without FP",
        lang: "ts",
        code: `function getUserEmail(user: { email?: string }): string | null {
  return user.email ? user.email : null;
}

const email = getUserEmail({ email: "test@test.com" });
if (email) {
  console.log(\`User email: \${email}\`);
} else {
  console.error("Email not found");
}
  `,
      },
    ],
  },

  {
    name: "Error Handling",
    blocks: [
      {
        title: "With FP",
        lang: "ts",
        code: `import { Result } from "@carbonteq/fp"

async function getUser(id: string): Promise<Result<{ id: string }, Error>> {
  if (id === "") return Result.Err(new Error("Missing ID"))
  return Result.Ok({ id })
}

async function fetchProfile(user: { id: string }): Promise<Result<string, Error>> {
  if (user.id === "x") return Result.Err(new Error("Banned user"))
  return Result.Ok("Profile for " + user.id)
}

async function loadProfile(id: string): Promise<Result<string, Error>> {
  return Result.Ok(id)
    .flatMap(getUser)
    .flatMap(fetchProfile)
    .toPromise()
}




`,
      },
      {
        title: "Without FP",
        lang: "ts",
        code: `async function getUser(id: string): Promise<{ id: string }> {
  if (id === "") throw new Error("Missing ID")
  return { id }
}

async function fetchProfile(user: { id: string }): Promise<string> {
  if (user.id === "x") throw new Error("Banned user")
  return "Profile for " + user.id
}

async function loadProfile(id: string): Promise<{ type: "ok"; value: string } | { type: "err"; error: Error }> {
  try {
    const user = await getUser(id)
    try {
      const profile = await fetchProfile(user)
      return { type: "ok", value: profile }
    } catch (e) {
      return { type: "err", error: e instanceof Error ? e : new Error("Profile error") }
    }
  } catch (e) {
    return { type: "err", error: e instanceof Error ? e : new Error("User error") }
  }
}`,
      },
    ],
  },
  // Tab 1: No Null Values Issue
 

  // Tab 2: No More Manual Error Handling
  

  // Tab 3: Declarative Coding (Sync)
  {
    name: "Declarative (Sync)",
    blocks: [
      {
        title: "With FP",
        lang: "ts",
        code: `import { Result } from "@carbonteq/fp"

function validateUser(input: { email?: string; password?: string }): Result<string, Error> {
  return Result.Ok(input)
    .flatMap((i) => i.email ? Result.Ok(i.email) : Result.Err(new Error("Missing email")))
    .flatMap((email) => email.includes("@") ? Result.Ok(email) : Result.Err(new Error("Invalid email")))
    .flatMap(() =>
      input.password && input.password.length >= 6
        ? Result.Ok("Valid user")
        : Result.Err(new Error("Password too short"))
    )
}


`,
      },
      {
        title: "Without FP",
        lang: "ts",
        code: `function validateUser(input: { email?: string; password?: string }): { type: "ok"; value: string } | { type: "err"; error: Error } {
  if (!input.email) {
    return { type: "err", error: new Error("Missing email") }
  }

  if (!input.email.includes("@")) {
    return { type: "err", error: new Error("Invalid email") }
  }

  if (!input.password || input.password.length < 6) {
    return { type: "err", error: new Error("Password too short") }
  }

  return { type: "ok", value: "Valid user" }
}`,
      },
    ],
  },

  // Tab 4: Declarative Coding (Async)
  {
    name: "Declarative (Async)",
    blocks: [
      {
        title: "With FP",
        lang: "ts",
        code: `import { Option, matchOpt } from "@carbonteq/fp";

async function fetchUser(userId: string): Promise<Option<string>> {
  return userId ? Option.Some("User data") : Option.None;
}

const result = await fetchUser("123");
matchOpt(result, {
  Some: (data) => console.log(data),
  None: () => console.error("User not found"),
});

`,
      },
      {
        title: "Without FP",
        lang: "ts",
        code: `function fetchUser(userId: string): Promise<string | null> {
  return Promise.resolve(userId ? "User data" : null);
}

fetchUser("123")
  .then((data) => {
    if (data) {
      console.log(data);
    } else {
      console.error("User not found");
    }
  })
  .catch(() => console.error("Something went wrong"));`,
      },
    ],
  },
];

export default tabsData;
