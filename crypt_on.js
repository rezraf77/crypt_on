//a program for generating password based on certain passphrase

function toHash()
    {
       var text = "blah";
       var hash = "";
         for( i = 0; i < text.length ; ++ i)
         switch(text[i])
                {
                case "a" : hash = hash + "@";break;
                case "b" : hash = hash + "6";break;
                case "c" : hash = hash + "(";break;
                case "a" : hash = hash + "@";break;
                case "a" : hash = hash + "@";break;
                case "a" : hash = hash + "@";break;
                case "a" : hash = hash + "@";break;
                case "a" : hash = hash + "@";break;
                case "a" : hash = hash + "@";break;
                case "a" : hash = hash + "@";break;
                default :hash = hash + text[i];
                }
                document.writeln(hash);
    }