import {NextAuthOptions} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode";

export const authOptions : NextAuthOptions ={

    pages:{
        signIn:"/login"
    },

    providers:[
        Credentials({
            name:"credentials",
            credentials:{
                email:{},
                password:{},
            },
            authorize: async (credentials)=>{
                const response = await fetch(`${process.env.API}/auth/signin` ,{
                    method:"POST",
                    body:JSON.stringify({
                        email:credentials?.email,
                        password:credentials?.password
                    }),
                    headers:{"Content-type" : "application/json"}
                })
                const payload = await response.json()
                console.log(payload);
                
                if(payload.message=="success"){
                    const decodedToken:{id:string} = jwtDecode(payload.token);
                    console.log("MyTokennnnn", decodedToken);
                    
                  return {
                    id:decodedToken.id,
                     user:payload.user,
                     token:payload.token
                   }
                   
                }else{
                   throw new Error(payload.message || "wrong creditional")  
                }
                // return null
                // return payload.user || payload.token
                // throw new Error(payload.message)
            }
        })
    ],

    callbacks:{
         async jwt({ token, user }) {
        if(user){
            token.user = user.user,
            token.token = user.token
        }
    
        return token //هنا خزنت التوكن واليوزر
    },

     async session({ session, token }) {
        session.user = token.user
      return session  //كده انا خزنت اليوزر
    }
    }
}