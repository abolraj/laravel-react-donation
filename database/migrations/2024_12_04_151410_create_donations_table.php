<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id(); // Donation ID
            $table->foreignId('donor_id')->constrained()->onDelete('cascade'); // Foreign key to donors
            $table->foreignId('cause_id')->constrained()->onDelete('cascade'); // Foreign key to causes
            $table->decimal('amount', 10, 2);
            $table->timestamp('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donations');
    }
};
