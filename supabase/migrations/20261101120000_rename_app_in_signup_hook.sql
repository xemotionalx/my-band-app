-- App renamed to "My Band App"; update the rejection message. The client
-- (src/app/(auth)/sign-up.tsx NOT_APPROVED_HINT) matches on "My Band App list".
create or replace function public.hook_before_user_created(event jsonb)
returns jsonb
language plpgsql
set search_path = ''
as $$
declare
  new_email text;
begin
  new_email := lower(trim(event->'user'->>'email'));

  if exists (select 1 from public.approved_emails where email = new_email) then
    return '{}'::jsonb;
  end if;

  return jsonb_build_object(
    'error', jsonb_build_object(
      'http_code', 403,
      'message', 'This email isn''t on the My Band App list. Ask an admin to add you.'
    )
  );
end;
$$;
