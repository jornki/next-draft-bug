import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
	draftMode().enable();
	return redirect("/");
}
