# Clean Forum

## Notes ##

core folder -> Folder responsible to hold code that is shared accross the entire application

DDD & Clean Architecture

Domain -> Use Cases & Entities
  Forum -> Sub Domain for Forum related stuffs
    application -> use cases & repositories
    enterprise -> Entities



AggregateRoot or Aggregate ->
  Problema quando uma Entidade depende de outra Entidade pra existir
  Entidades sao trabalhadas juntas
  Conjunto de entidades q sao manipuladas ao mesmo tempo. Elas juntas compoem algo maior que eh o que chamamos de aggregate
  
  Example: Order  -> OrderItem[]
                  -> Shipping

It's important to note that in the Aggregate, the Main Entity (which is an aggregate Root) is responsible to handle all sub-aggregatted entities, which means
that we're not going to have a tons of repository. One repository should handle everything if the entity using it is aggregate

Example: If a Post has attachments and we have a repository for Post. Then, the repository for post needs to handle the attachements as well.


WatchedList -> Pattern que permite a gente ter mais informacoes sobre itens contidos em uma lista

  Example:
    Question -> Attachment[]

    Create Question 


---

Sub domains

- Core -> What gives money. What cannot stop otherwise, it will bring problems to the application
  E.g.: In a Ecommerce would be everything that involve money like Purchase, catalog, payment, delivery

- Supporting -> What gives support to the core to work. Is not essential but gives support
  E.g.: In a Ecommerce would be stock (for catalog and delivery)

- Generic -> You need them but they're not that important.
  E.g.: In a Ecommerce would be the nofication of clients, promotions, chat




# Running Docker Compose

Command: `docker-compose up -d`\
This will run our docker compose file and run in background (detached mode which means we don't need terminal open for that)

Command: `docker ps`\
This will show the list of containers

# Generating Public/Private key for RSA256

### MacOS
- Command to generate private key:\
`openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048`
- Command to generate a public key from private key:\
`openssl rsa -pubout -in private_key.pem -out public_key.pem`
- Command to convert to Base64 (to put in .env file):\
`base64 -i private_key.pem -o private_key-base64.txt`