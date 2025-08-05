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
        code: `import { Result } from "@carbonteq/fp";

async function getUser(id: string): Promise<Result<{ id: string }, Error>> {
  if (id === "") return Result.Err(new Error("Missing ID"));
  return Result.Ok({ id });
}

async function fetchProfile(user: { id: string }): Promise<Result<string, Error>> {
  if (user.id === "x") return Result.Err(new Error("Banned user"));
  return Result.Ok("Profile for " + user.id);
}

async function loadProfile(id: string): Promise<Result<string, Error>> {
  return getUser(id) // Start with getUser instead of Result.Ok
    .flatMap(fetchProfile) // Then chain fetchProfile
    .toPromise(); // Convert to Promise at the end
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
        code: `import { Result } from "@carbonteq/fp";

// Individual validation functions
function validateEmailPresence(input: { email?: string }): Result<string, Error> {
  return input.email 
    ? Result.Ok(input.email)
    : Result.Err(new Error("Missing email"));
}

function validateEmailFormat(email: string): Result<string, Error> {
  return email.includes("@") 
    ? Result.Ok(email)
    : Result.Err(new Error("Invalid email"));
}

function validatePassword(input: { password?: string }): Result<string, Error> {
  return input.password && input.password.length >= 6
    ? Result.Ok("Valid password")
    : Result.Err(new Error("Password too short"));
}

// Composed validation
function validateUser(input: { email?: string; password?: string }): Result<string, Error> {
  return validateEmailPresence(input)
    .flatMap(validateEmailFormat)
    .flatMap(() => validatePassword(input));
}



`,
      },
      {
        title: "Without FP",
        lang: "ts",
        code: `// Individual validation functions
function validateEmailPresence(input: { email?: string }): { type: "ok"; value: string } | { type: "err"; error: Error } {
  return input.email 
    ? { type: "ok", value: input.email }
    : { type: "err", error: new Error("Missing email") };
}

function validateEmailFormat(email: string): { type: "ok"; value: string } | { type: "err"; error: Error } {
  return email.includes("@")
    ? { type: "ok", value: email }
    : { type: "err", error: new Error("Invalid email") };
}

function validatePassword(input: { password?: string }): { type: "ok"; value: string } | { type: "err"; error: Error } {
  return input.password && input.password.length >= 6
    ? { type: "ok", value: "Valid password" }
    : { type: "err", error: new Error("Password too short") };
}

// Composed validation
function validateUser(input: { email?: string; password?: string }): { type: "ok"; value: string } | { type: "err"; error: Error } {
  const emailPresenceResult = validateEmailPresence(input);
  if (emailPresenceResult.type === "err") return emailPresenceResult;

  const emailFormatResult = validateEmailFormat(emailPresenceResult.value);
  if (emailFormatResult.type === "err") return emailFormatResult;

  const passwordResult = validatePassword(input);
  if (passwordResult.type === "err") return passwordResult;

  return { type: "ok", value: "Valid user" };
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
  await new Promise(resolve => setTimeout(resolve, 100));
  return userId 
    ? Option.Some("User data for " + userId) 
    : Option.None;
}

async function fetchUserProfile(userId: string): Promise<Option<{name: string, email: string}>> {
  const userResult = await fetchUser(userId);
  
  return matchOpt(userResult, {
    Some: async (userData) => {
      await new Promise(resolve => setTimeout(resolve, 50));
      return Option.Some({
        name: "User " + userId,
        email: userId + "@example.com"
      });
    },
    None: () => Option.None
  });
}

const result = await fetchUserProfile("123");
matchOpt(result, {
  Some: (profile) => console.log("Profile:", profile),
  None: () => console.error("User profile not found")
});

`,
      },
      {
        title: "Without FP",
        lang: "ts",
        code: `async function fetchUser(userId: string): Promise<string | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return userId ? "User data for " + userId : null;
}

async function fetchUserProfile(userId: string): Promise<{name: string, email: string} | null> {
  try {
    const userData = await fetchUser(userId);
    
    if (!userData) {
      return null;
    }
    
    await new Promise(resolve => setTimeout(resolve, 50));
    return {
      name: "User " + userId,
      email: userId + "@example.com"
    };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

fetchUserProfile("123")
  .then(profile => {
    if (profile) {
      console.log("Profile:", profile);
    } else {
      console.error("Profile not found");
    }
  })
  .catch(error => console.error("Failed:", error));`,
      },
    ],
  },
];

export default tabsData;
