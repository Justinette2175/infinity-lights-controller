CREATE TYPE public.value_type AS ENUM (
    'color',
    'percent'
);

CREATE TABLE public.modes (
    id serial primary key,
    name text NOT NULL
);

CREATE TABLE public.settings (
    id serial primary key,
    mode_id integer NOT NULL references public.modes(id),
    name text NOT NULL,
    type public.value_type NOT NULL,
    value jsonb NOT NULL
);
