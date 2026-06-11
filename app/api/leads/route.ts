import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { nombre, email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 })
    }

    const { error } = await supabase
      .from('leads')
      .insert([{ nombre: nombre || null, email }])

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ message: 'Ya estás registrado/a ✓' }, { status: 200 })
      }
      throw error
    }

    return NextResponse.json({ message: '¡Registro exitoso!' }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
