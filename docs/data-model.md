# Data Model

[![](https://mermaid.ink/img/pako:eNqVVN1vmzAQ_1csS31LI1byQfwWtdXUh7VVur5USOgKF_BkbGSbdV2a_33GISsBtqp-gLvzffz8u7N3NFUZUkZRX3HINZSxJG49PlxvyO4gN8tYzWVO6ppnQ6NBLaHEwUYFxrwoPYzAErgYWHOUGeqx9CmYYfZnrm3xitBG7GN5EB5u1_f3H2LPwKL_JKlG9xuCFCoFy5UcbEBtC9XByaUlRkJVlVDdXI2h-bY-AdQEjPB4yqEHaHmJibGg7diG4-vd_KyUICCEekm0EqIH4-vm7vHzGFqjZ0j1eW5GJBnN2wzEkYijLdeq_gc7ic-0vvx-c3f7UaoWkae7XwLSpl2DGmdnZIPCt9IUvDKdAX97Oz9Xu3Zi2OGcaHqN6zspaYFL06Xh6NOhhJEfynu9sz_mxGUq6gzNaZ-6JRsIjBQwWnDIHyMV6q3SZfcY_3PXmCL_eUBAJzTXPKPM6hontETtLqpTqe9KTG2Bbjwoc2KGW6iFjWks9y6sAvmkVHmMdM3OC8q2IIzT6qqZ2fZ9-evib_ulqqWl7CLwKSjb0V9Oi5bT4CJazcPZYj6LonBCXymbLaeL8EsYRKtFEAaraL6f0N--ZjCNlvP9Hz_nb1Q?type=png)](https://mermaid.live/edit#pako:eNqVVN1vmzAQ_1csS31LI1byQfwWtdXUh7VVur5USOgKF_BkbGSbdV2a_33GISsBtqp-gLvzffz8u7N3NFUZUkZRX3HINZSxJG49PlxvyO4gN8tYzWVO6ppnQ6NBLaHEwUYFxrwoPYzAErgYWHOUGeqx9CmYYfZnrm3xitBG7GN5EB5u1_f3H2LPwKL_JKlG9xuCFCoFy5UcbEBtC9XByaUlRkJVlVDdXI2h-bY-AdQEjPB4yqEHaHmJibGg7diG4-vd_KyUICCEekm0EqIH4-vm7vHzGFqjZ0j1eW5GJBnN2wzEkYijLdeq_gc7ic-0vvx-c3f7UaoWkae7XwLSpl2DGmdnZIPCt9IUvDKdAX97Oz9Xu3Zi2OGcaHqN6zspaYFL06Xh6NOhhJEfynu9sz_mxGUq6gzNaZ-6JRsIjBQwWnDIHyMV6q3SZfcY_3PXmCL_eUBAJzTXPKPM6hontETtLqpTqe9KTG2Bbjwoc2KGW6iFjWks9y6sAvmkVHmMdM3OC8q2IIzT6qqZ2fZ9-evib_ulqqWl7CLwKSjb0V9Oi5bT4CJazcPZYj6LonBCXymbLaeL8EsYRKtFEAaraL6f0N--ZjCNlvP9Hz_nb1Q)



## Tables
There are tables for users, their snapps, the groups that they're in, and the snappmaps created by those groups. 
- The user table contains personal data like the user's name, email, and gender. 
- The snapp table has a unique id that also functions as its slug. It also holds important info like the author and the snappmap the snap was posted in. 
- The group table holds the name, creator, admins (people who can start snappmaps), and the snappmaps that belong to that group. 
- The snappmap table holds stuff like its own name, the deadline, and a variable that determines whether or not users can add pictures from their camera roll.
- The actions table would hold the different actions a user can perform on a snapp. Currently those are liking, throwing a tomato at it, and starring. 
- The user_group table would be a junction collection (https://directus.io/docs/guides/data-model/relationships#many-to-many-m2m) to link users to groups.
- The snapp_user_action table would hold records of every action a user has performed on a snapp.

## Relationships
One user can have many snapps (one to many)
One user can belong to many groups and groups can have many users (many to many)
One user can like many snapps and snapps can be liked by many users (many to many)
One snappmap can contain many snapps (one to many)
One group can contain many snappmaps (one to many)

### Vragen
- Hoe query ik hoeveel likes, dislikes en stars een SnappMap in totaal heeft?
