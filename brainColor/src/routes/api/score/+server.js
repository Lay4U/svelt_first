import { MongoClient } from "mongodb";
import { connectionString } from "$lib/dbUrl.js";
import { nanoid } from "nanoid";
import { json } from "@sveltejs/kit";

const uri = connectionString;

export const GET = async (req, res) => {
  const client = new MongoClient(uri);
  let scoreList = [];
  try{
    await client.connect();
    const db = client.db("brainColor");

    scoreList = await db.collection("score")
      .find()
      .sort( { score: -1 })
      .limit(10)
      .toArray();

    return new Response(JSON.stringify(scoreList));
    // return {
    //   status: 200,
    //   body: {
    //     list: scoreList
    //   }
    // }
  } catch (e) {
    console.log(e);
    return {
      status: 500,
      body: {
        list: [],
        msg: e
      }
    }
  } finally {
    await client.close();
    console.log("DB closed");
  }
};

export async function PUT({request}){
  const client = new MongoClient(uri);
  let rtn ={};
  // console.log(json(request.json));
  console.log('------');
  console.log(request.json.toString());
  console.log('------');
  const {score, name} = await request.json();


  if(!score.name || !score.score){
    console.log(score);
    throw "잘못된 형식입니다."
  }

  score["_id"] = nanoid();

  try{
    await client.connect();
    const db = client.db("brainColor");

    rtn = await db.collection("score").insertOne(score);
    return new Response(JSON.stringify(rtn));


  }catch(e){
    return new Response(JSON.stringify(e));
  }finally {
    await client.close();
    console.log("DB closed");
  }
}