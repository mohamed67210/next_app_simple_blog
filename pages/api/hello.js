// la partie backend de l'application
import dbConnect from "@/utils/dbConnect"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// faire appeler la function qui permet la connexion a la bd
dbConnect();

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
