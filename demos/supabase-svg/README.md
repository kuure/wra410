# supabase svg demo

An example of using async / await to retrieve remote JSON data from my
Supabase database's REST endpoint


This is the least complicated, __least secure__, simplest possible 
SQL code for creating the database; I did it via the Supabase SQL Editor:

```
create table svg_images (
	id uuid primary key default gen_random_uuid(),
	svg_content text not null,
	created_at timestamptz not null default now()
);

alter table svg_images enable row level security;

create policy "Allow public read access"
	on svg_images for select
	using (true);

create policy "Allow public insert access"
	on svg_images for insert
	with check (true);
```


To insert things - via the Supabase SQL editor or using various tools like
REST POST operations - it looks like this with the "svg" values changed of
course:

```
insert into svg_images (svg_content)
values ('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" /></svg>');
```

The timestamp and ID are auto-incremented.


The is an awful lot more that can be done, as this is fully open to the
public and therefore not secure in any way. There are many ways to
improve this, from simple things like rate limiting by URL to,
preferable, moving any logic that modifies the DB into files that are
only available via the server and such. 


