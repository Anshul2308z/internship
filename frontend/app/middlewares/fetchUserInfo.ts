
export async function fetchUserInfo() {
  const currentuser = await fetch("https://localhost:3000/api/user",{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

    const data = await currentuser.json();
    return data;

}