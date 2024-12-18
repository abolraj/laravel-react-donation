<?php

namespace App\Http\Requests;

use App\Models\Cause;
use Closure;
use Illuminate\Foundation\Http\FormRequest;

class StoreDonationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'amount' => [
                'required',
                'integer',
                function(string $attr,mixed $val, Closure $fail) {
                    
                    if(!$this->route('cause')->is_open()){
                        $fail("The $attr is full and closed !");
                    }
                },
                'gt:0',
                'max:' . max($this->route('cause')->remained_amount(),0),
            ]
        ];
    }
}
